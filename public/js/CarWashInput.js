var carWashes = [
    { value: "Express", price: "$5.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Dry", },
    { value: "Premium", price: "$7.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Super Wash<br>Wheel Cleaner<br>Dry"},
    { value: "Deluxe",  price: "$8.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Super Wash<br>Wheel Cleaner<br>Tire Shine<br>Wheel Scrub<br>Undercarriage<br>Touch Free Dry"}
];

var CarWashInput = React.createClass({displayName: "CarWashInput",    
    
    onWashClicked: function(wash) {
        this.props.onCarWashSelected(wash);
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "selectcarwash"}, 
                React.createElement("div", {className: "row"}, 
                    Object.keys(carWashes).map(function(wash) {
                        return (
                            React.createElement(CarWashSelector, {value: carWashes[wash].value, 
                                         label: carWashes[wash].label, 
                                         price: carWashes[wash].price, 
                                         selected: carWashes[wash].selected, 
                                         onClick: self.onCarWashSelected})
                        )
                    })
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "fuelgradeinput--cancel", onClick: this.onCancelClicked}, 
                        "Cancel Transaction"
                    )
                )
            )
        );
    }  
});