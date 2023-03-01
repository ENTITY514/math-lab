import { Directory } from "./directory"
import { File } from "./file"



export class ENGINE_FILE_SYSTEM_MODULE {
    root: Directory
    dir_history: Directory[]
    active_dir: Directory
    active_file: File | null
    sort_type: string
    constructor() {
        this.root = new Directory('root', null)
        this.active_dir = this.root
        this.dir_history = []
        this.dir_history.push(this.active_dir)
        this.sort_type = 'name_normal'
        this.active_file = null
    }

    addFileToActiveDir(file: File) {
        this.active_dir.addFile(file)
    }

    addDirToActiveDir(dir: Directory) {
        this.active_dir.addDirectory(dir)
    }

    createDefaultDir() {
        this.active_dir.createDirectory('Новая папка')
    }

    returnOut() {
        if (this.active_dir.parent != null) {
            this.active_dir = this.active_dir.parent
        }
    }

    setActiveDir(dir: Directory) {
        this.dir_history.push(dir)
        this.active_dir = dir
    }

    setActiveFile(file: File | null) {
        this.active_file = file
    }

    getActiveDirChilds() {
        this.sort()
        return this.active_dir.childs
    }

    setSortType(type: string) {
        this.sort_type = type
    }

    sort() {
        if (this.sort_type === "name_normal") {
            this.active_dir.SortChildsOnName()
        }
        else if (this.sort_type === "name_revers") {
            this.active_dir.ReverseSortChildsOnName()
        }
        else if (this.sort_type === "type_normal") {
            this.active_dir.SortChildsOnType()
        }
        else if (this.sort_type === "type_revers") {
            this.active_dir.ReverseSortChildsOnName()
        }
    }
}