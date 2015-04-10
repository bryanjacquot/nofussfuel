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
                <div className="banner--label-container col">
                    <div className="banner--label row">
                        {this.props.label}
                    </div>
                    <div className="banner--sublabel row">
                        {this.props.sublabel}
                    </div>
                </div>
            </div>
        );
    }  
});