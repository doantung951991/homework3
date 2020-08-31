class DestinationsList {
    destination;
    dateModified;
    constructor(){
        this.destinations = [];
        this.dateModified = new Date().toISOString();
    }
    addDestination(destination){
        if(Destination instanceof destination)
         this.destinations.push(Destination);
        else return; 
    }
    findDestination(name) {
        
        for (let Destination of this.destinations) {
            if (Destination.name === name) {
            }
         }
        }
         get totalPrice() {
            let totalPrice = 0;
            for (let destination of this.destinations) {
                if (totalPrice += destination.ticketPrice){
  }else if (destination instanceof Restaurant) {
                    totalPrice += destination.buffetPrice; {
                    
                }
            }
            return totalPrice;
        
     }
    }
    }
