var ZipCodeBar = React.createClass({displayName: "ZipCodeBar",
    render: function() {
        return (
            React.createElement("div", {id: "zipcodebar"}, 
                React.createElement("div", {className: "row label zipcodebar--label"}, 
                    "Please enter zip code"
                ), 
                React.createElement("div", {className: "row", id: "digits"}, 
                    React.createElement("div", {className: "digit", id: "digit1"}, this.props.zip[0]), 
                    React.createElement("div", {className: "digit", id: "digit2"}, this.props.zip[1]), 
                    React.createElement("div", {className: "digit", id: "digit3"}, this.props.zip[2]), 
                    React.createElement("div", {className: "digit", id: "digit4"}, this.props.zip[3]), 
                    React.createElement("div", {className: "digit", id: "digit5"}, this.props.zip[4])
                )
            )
        );
    }  
});