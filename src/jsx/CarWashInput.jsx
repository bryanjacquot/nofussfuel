var carWashes = [
    { value: "Express", price: "$5.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Dry", },
    { value: "Premium", price: "$7.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Super Wash<br>Wheel Cleaner<br>Dry"},
    { value: "Deluxe",  price: "$8.00", selected: "false", label: "Foam Bath<br>Clear Coat<br>Spot Free Rinse<br>Super Wash<br>Wheel Cleaner<br>Tire Shine<br>Wheel Scrub<br>Undercarriage<br>Touch Free Dry"}
];

var CarWashInput = React.createClass({    
    
    onWashClicked: function(wash) {
        this.props.onCarWashSelected(wash);
    },
    
    render: function() {
        return (
            <div className="selectcarwash">
                <div className="row">
                    {Object.keys(carWashes).map(function(wash) {
                        return (
                            <CarWashSelector value={carWashes[wash].value} 
                                         label={carWashes[wash].label}
                                         price={carWashes[wash].price}
                                         selected={carWashes[wash].selected} 
                                         onClick={self.onCarWashSelected} />
                        )
                    })}
                </div>
                <div className="row">
                    <div className="fuelgradeinput--cancel" onClick={this.onCancelClicked}>
                        Cancel Transaction
                    </div>
                </div>
            </div>
        );
    }  
});