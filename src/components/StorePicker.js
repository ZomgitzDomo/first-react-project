import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

    constructor() {
        super();
        this.gotToStore = this.gotToStore.bind(this);
    }
    gotToStore(e) {
        e.preventDefault();
        //console.log(this.storeInput.value);
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.gotToStore}>
                {/*my comment*/}
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeInput = input }} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;