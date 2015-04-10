var Banner = React.createClass({displayName: "Banner",    
    getInitialState: function() {
        return {
            classes: "banner"
        };
    },
    
    raise: function() {
        this.setState( {
            classes: "banner banner--visible"
        });
    },
    
    render: function() {
        return (
            React.createElement("div", {className: this.state.classes}, 
                React.createElement("div", {className: "banner--title col"}, 
                    this.props.title
                ), 
                React.createElement("div", {className: "banner--label-container col"}, 
                    React.createElement("div", {className: "banner--label row"}, 
                        this.props.label
                    ), 
                    React.createElement("div", {className: "banner--sublabel row"}, 
                        this.props.sublabel
                    )
                )
            )
        );
    }  
});