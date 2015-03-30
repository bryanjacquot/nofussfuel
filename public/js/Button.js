var Button = React.createClass({displayName: "Button",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
    	var classes = "button center";

    	if( this.props.className ) {
    		classes = this.props.className + " " + classes;	
    	}
    	

        return (
            React.createElement("div", {className: classes, onClick: this.onClick}, this.props.value)
        );
    }  
});