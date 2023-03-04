import { nanoid } from "nanoid"
import { Assets } from "../../../../assets/get"
import { FileType } from "../../../Types/file_types"
import { File } from "./file"
import { TextureFile } from "./texture_file"
import { FileView } from "./views/view"

type FileTypes = TextureFile | File

export class Directory {
    id: string
    name: string
    url!: string
    childs: Array<File | Directory>
    parent: Directory | null
    icon_url: string = Assets.empty_folder
    constructor(name: string, parent: Directory | null) {
        this.name = name
        this.parent = parent
        this.id = nanoid()
        this.childs = []
        this._createURL()
    }

    _set_id(id: string) {
        this.id = id
    }

    __file_view__(size: string) {
        return <FileView title={this.name} url={this.icon_url} size={size} key={this.id} id={this.id} />
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

    createFile(name: string, type: FileType, data: any, parent: Directory, metadata: any = null): File {
        const file = new File(name, type, data, parent, metadata)
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

    getAllFilesByType<T extends FileTypes>(type: any): Array<T> {
        let files: File[] = []
        let typed_files: T[] = []
        files = this.getAllFiles(files)
        files.forEach((file) => {
            if (file instanceof type) {
                typed_files.push(file as T)
            }
        });
        return typed_files
    }

    getChildsOnURL(url: string): Array<File | Directory> | undefined {
        if (url === '') {
            return this.childs
        }
        else if (url.includes('/')) {
            let index = url.indexOf('/')
            let dir_name = url.slice(0, index)
            let dir = this.findFirstDirectoryByName(dir_name)
            return dir?.getChildsOnURL(url.slice(index + 1, url.length))
        }
        else {
            return this.findFirstDirectoryByName(url)?.childs
        }
    }

    findFilesByName(name: string): Array<File> {
        let files: File[] = []
        let named_files: File[] = []
        files = this.getAllFiles(files)
        files.forEach((file: File) => {
            if (file.name === name) {
                named_files.push(file)
            }
        });
        return named_files
    }

    findFirstFileByName(name: string): File | null {
        let files: File[] = []
        let named_file = null
        files = this.getAllFiles(files)
        files.forEach((file: File) => {
            if (file.name === name) {
                named_file = file
            }
        });
        return named_file
    }

    findFileByID(id: string): File | null {
        let files: File[] = []
        let file_ = null
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
        let named_dirs: Directory[] = []
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

    findFirstDirectoryByName(name: string): Directory | undefined {
        let dir: Directory | undefined = undefined
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
            else {
                return 0
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
            else {
                return 0
            }
        }).reverse()
    }
}
