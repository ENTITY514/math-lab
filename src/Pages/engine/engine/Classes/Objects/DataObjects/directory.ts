import { GP_Directory } from "../../../../Interfaces/Production_Interfaces/GP_Files"
import { Type } from "../../Interfaces/file_extensions"
import { DefaultFileCreator } from "../DefaultFileCreator/default_file_creator"
import { ScriptFileJS } from "../Script_File/script_file"
import { TextureFile } from "../Texture_File/texture_file"
import { File } from "./file"

export class Directory {
    id: number
    name: string
    url: string
    childs: Array<File | Directory>
    parent: Directory | null
    constructor(name: string, parent: Directory) {
        this.name = name
        this.parent = parent
        this.id = Math.trunc(Math.random() * 100000000)
        this.childs = []
        this._createURL()
    }

    _set_id(id) {
        this.id = id
    }

    addFile(file: File) {
        this.childs.push(file)
    }

    addDirectory(dir: Directory) {
        this.childs.push(dir)
    }

    _createURL() {
        if (this.parent === null) {
            this.url = ''
        }
        else if (this.parent.url === '') {
            this.url = this.name
        }
        else {
            this.url = this.parent.url + '/' + this.name
        }
    }

    createDirectory(name: string): Directory {
        const directory = new Directory(name, this)
        this.childs.push(directory)
        return directory
    }

    createFile(name: string, type: Type, data: any, parent: Directory, metadata: any = null): File {
        const file = new File(name, type, data, parent, metadata)
        this.childs.push(file)
        return file
    }

    createDefaultTextureFile() {
        const file = DefaultFileCreator.getTextureFile(this)
        this.childs.push(file)
        return file
    }

    rename(name: string) {
        if (name != '') {
            this.name = name
        }
    }

    getChilds() {
        return this.childs;
    }

    getAllFiles(array: Array<File>) {
        this.childs.forEach(element => {
            if (element instanceof File) {
                array.push(element)
            }
            else if (element instanceof Directory) {
                element.getAllFiles(array)
            }
        });
        return array
    }

    getAllFilesByType<T>(type): Array<T> {
        let files = []
        let typed_files = []
        files = this.getAllFiles(files)
        files.forEach((file) => {
            if (file instanceof type) {
                typed_files.push(file)
            }
        });
        return typed_files
    }

    getChildsOnURL(url: string): Array<File | Directory> {
        if (url === '') {
            return this.childs
        }
        else if (url.includes('/')) {
            let index = url.indexOf('/')
            let dir_name = url.slice(0, index)
            let dir = this.findFirstDirectoryByName(dir_name)
            return dir.getChildsOnURL(url.slice(index + 1, url.length))
        }
        else {
            return this.findFirstDirectoryByName(url).childs
        }
    }

    findFilesByName(name: string): Array<File> {
        let files = []
        let named_files = []
        files = this.getAllFiles(files)
        files.forEach((file: File) => {
            if (file.name === name) {
                named_files.push(file)
            }
        });
        return named_files
    }

    findFirstFileByName(name: string): File | null {
        let files = []
        let named_file = null
        files = this.getAllFiles(files)
        files.forEach((file: File) => {
            if (file.name === name) {
                named_file = file
            }
        });
        return named_file
    }

    findFileByID(id: number) {
        let files = []
        let file_ = null
        id = Number(id)
        files = this.getAllFiles(files)
        files.forEach((file: File) => {
            if (file.id === id) {
                file_ = file
            }
        });
        return file_
    }

    findDirectoryByName(name: string) {
        let dirs = []
        let named_dirs = []
        this.childs.forEach(element => {
            if (element instanceof Directory) {
                if (element.name === name) {
                    named_dirs.push(element)
                }
                const local_dirs = element.findDirectoryByName(name)
                local_dirs.forEach(element => {
                    named_dirs.push(element)
                });
            }
        });
        return named_dirs
    }

    findFirstDirectoryByName(name: string): Directory {
        let dir
        this.childs.forEach(element => {
            if (element instanceof Directory) {
                if (element.name === name) {
                    dir = element
                }
            }
        });
        return dir
    }

    SortChildsOnName() {
        this.childs = this.childs.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name === b.name) {
                return 0
            }
            else {
                return -1
            }
        })
    }
    ReverseSortChildsOnName() {
        this.childs = this.childs.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name === b.name) {
                return 0
            }
            else {
                return -1
            }
        }).reverse()
    }

    SortChildsOnType() {
        this.childs = this.childs.sort((a, b) => {
            if (a instanceof Directory && b instanceof File) {
                return 1
            }
            else if (a instanceof Directory && b instanceof Directory) {
                if (a.name > b.name) {
                    return 1
                }
                else if (a.name === b.name) {
                    return 0
                }
                else {
                    return -1
                }
            }
            else if (a instanceof File && b instanceof File) {
                if (a.type > b.type) {
                    return 1
                }
                else if (a.type === b.type) {
                    return 0
                }
                else {
                    return -1
                }
            }
        })
    }

    ReverseSortChildsOnType() {
        this.childs = this.childs.sort((a, b) => {
            if (a instanceof Directory && b instanceof File) {
                return 1
            }
            else if (a instanceof Directory && b instanceof Directory) {
                if (a.name > b.name) {
                    return 1
                }
                else if (a.name === b.name) {
                    return 0
                }
                else {
                    return -1
                }
            }
            else if (a instanceof File && b instanceof File) {
                if (a.type > b.type) {
                    return 1
                }
                else if (a.type === b.type) {
                    return 0
                }
                else {
                    return -1
                }
            }
        }).reverse()
    }

    create_dir_with_files(dir: GP_Directory, parent: Directory = null) {
        const directory = new Directory(dir.name, parent)
        dir.childs.forEach(child => {
            if (child.is_file) {
                if (child.type === Type.texture) {
                    const file = new TextureFile(directory, child.data, child.name)
                    file._set_id(child.id)
                    directory.addFile(file)
                }
                else if (child.type === Type.script) {
                    const file = new ScriptFileJS(directory, child.data, child.name)
                    file._set_id(child.id)
                    directory.addFile(file)
                }
            }
            else {
                directory.addDirectory(this.create_dir_with_files(child as GP_Directory, directory))
            }
        });
        return directory
    }

    _getDataForGamePacker() {
        let childs = []
        this.childs.forEach(child => {
            childs.push(child._getDataForGamePacker())
        });
        let dir: GP_Directory = {
            name: this.name,
            id: this.id,
            childs: childs,
            is_file: false
        }
        return dir;
    }
}
