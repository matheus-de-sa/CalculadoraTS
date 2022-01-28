class DateTime {
    constructor(elementDate = document.querySelector('#datetime > div:nth-child(2)'), elementTime = document.querySelector('#datetime span')) {
        this.elementDate = elementDate;
        this.elementTime = elementTime;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const dateNow = new Date();
        const day = dateNow.getDate();
        const month = dateNow.toLocaleDateString('pt-br', { month: 'long' });
        const year = dateNow.getFullYear();
        const hour = dateNow.getHours();
        const minute = dateNow.getMinutes().toString().padStart(2, '0');
        const twoDots = dateNow.getSeconds() % 2 === 0 ? ':' : ' ';
        this.date = `${day} ${month} ${year}`;
        this.time = `${hour}${twoDots}${minute}`;
    }
    set date(content) {
        if (this.elementDate)
            this.elementDate.innerHTML = content;
    }
    set time(content) {
        if (this.elementTime)
            this.elementTime.innerHTML = content;
    }
}
export default DateTime;
//# sourceMappingURL=DateTime.js.map