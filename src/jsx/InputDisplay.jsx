var InputDisplay = React.createClass({
    render: function() {
        var digits = [];
        
        for( var i = 0; i < this.props.size; i++) {
            if( this.props.password == "true") {
                if( this.props.input[i] != undefined ) {
                    digits.push(<div className="digit" key={i}>*</div>);
                }
                else {
                    digits.push(<div className="digit" key={i}></div>);
                }
            }
            else {
                digits.push(<div className="digit" key={i}>{this.props.input[i]}</div>);
            }
        }                    
        
        return (
            <div id="inputdisplay">
                <div className="row label inputdisplay--label">
                    {this.props.prompt}
                </div>
                <div className="row" id="digits">
                    {digits}
                </div>
            </div>
        );
    }  
});