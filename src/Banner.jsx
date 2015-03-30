var Banner = React.createClass({    
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
            <div className={this.state.classes}>
                <div className="banner--title col">
                    {this.props.title}
                </div>
                <div className="banner--label col">
                    {this.props.label}
                </div>
            </div>
        );
    }  
});