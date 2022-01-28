class Window {
    constructor(
        private element: HTMLDivElement | null = document.querySelector(
            '#values'
        )
    ) {
        this.content = '0'
    }

    set content(value: string) {
        if (value.toString().length > 12) value = 'Error'
        if (this.element)
            this.element.innerHTML = value.toString().replace('.', ',')
    }

    get content(): string {
        return this.element ? this.element.innerHTML : '0'
    }
}

export default Window
