//Park(công viên)

class Park extends Destination{
    ticketPrice;
    constructor(name,ticketPrice){
        super(name);
        this.ticketPrice = ticketPrice;
    }

}
export{Park}