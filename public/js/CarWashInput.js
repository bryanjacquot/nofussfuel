var carWashes = [
    { value: "Express", 
      price: "5.00", 
      selected: "false",
      label: ["Foam Bath", 
              "Clear Coat", 
              "Spot Free Rinse",
              "Dry"]
    },
    { value: "Premium", 
      price: "7.00", 
      selected: "false", 
      label: ["Foam Bath",
              "Clear Coat",
              "Spot Free Rinse",
              "Super Wash",
              "Wheel Cleaner",
              "Dry"]
    },
    { value: "Deluxe",
      price: "8.00",
      selected: "false",
      label: ["Foam Bath",
              "Clear Coat",
              "Spot Free Rinse",
              "Super Wash",
              "Wheel Cleaner",
              "Tire Shine",
              "Wheel Scrub",
              "Undercarriage",
              "Touch Free Dry"]
    }
];

var CarWashInput = React.createClass({displayName: "CarWashInput",   
    
    onCarWashSelected: function(wash) {
        var price = 0;

        Object.keys(carWashes).map(function(thisWash) {
            if( carWashes[thisWash].value == wash ) {
                price = carWashes[thisWash].price;
            }
        });

        this.props.onCarWashSelected(wash, price);
    },

    onCancelClicked: function() {
        this.props.onCancelClicked();
    },
    
    render: function() {
        var self = this;

        return (
            React.createElement("div", {className: "selectcarwash--overlay"}, 
                React.createElement("div", {className: "selectcarwash"}, 
                    React.createElement("div", {className: "row"}, 
                        Object.keys(carWashes).map(function(wash) {
                            return (
                                React.createElement(CarWashSelector, {value: carWashes[wash].value, 
                                             label: carWashes[wash].label, 
                                             price: carWashes[wash].price, 
                                             selected: carWashes[wash].selected, 
                                             onCarWashSelected: self.onCarWashSelected, 
                                             key: wash})
                            )
                        })
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "carwashinput--cancel", onClick: this.onCancelClicked}, 
                            "Cancel"
                        )
                    )
                )
            )
        );
    }  
});