
class Destination {
    name;
    images;
    datemodified;
    constructor(name){
        this.name=name;
        this.images = [];
        this.datemodified=new Date().toISOString();
    }
    set NewImage(image){
            this.images.push(image);
            this.datemodified=new Date().toISOString();
    }
    get info(){
        return(`chào mừng bạn đến với : ${this.name}
                   Review địa điểm : ${this.images}
        Cập nhật lúc: ${this.datemodified}
        `);
    }
}
export{Destination};