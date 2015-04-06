var Keypad = React.createClass({
    
    onEnterClicked: function() {
        this.props.onEnterClicked();
    },  
    
    onCancelClicked: function() {
        this.props.onCancelClicked();
    },  
    
    onBackspaceClicked: function() {
        this.props.onBackspaceClicked();
    },

    onButtonClicked: function(value) {
        this.props.onButtonClicked(value);
    },

    render: function() {
        return (
            <div className="row keypad">
                <div className="col keypad--digits">
                    <div className="row">
                        <Button value="1" onClick={this.onButtonClicked}/>
                        <Button value="2" onClick={this.onButtonClicked}/>
                        <Button value="3" onClick={this.onButtonClicked}/>
                    </div>
                    <div className="row">
                        <Button value="4" onClick={this.onButtonClicked}/>
                        <Button value="5" onClick={this.onButtonClicked}/>
                        <Button value="6" onClick={this.onButtonClicked}/>
                    </div>
                    <div className="row">
                        <Button value="7" onClick={this.onButtonClicked}/>
                        <Button value="8" onClick={this.onButtonClicked}/>
                        <Button value="9" onClick={this.onButtonClicked}/>
                    </div>
                    <div className="row">
                        <div className="keypad--cancel" onClick={this.onCancelClicked}>
                            Cancel Transaction
                        </div>
                        <Button value="0" onClick={this.onButtonClicked}/>
                    </div>
                </div>
                <div className="col keypad--ops">
                    <div className="row ops">
                        <div className="button op center" id="backspace" onClick={this.onBackspaceClicked}>Backspace</div>
                    </div>
                    <div className="row ops">
                        <div className="button op center" id="enter" onClick={this.onEnterClicked}>Enter</div>
                    </div>
                </div>
            </div>
        );
    }
});