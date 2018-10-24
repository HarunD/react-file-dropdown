// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './style.css';

type Props = {
    addFileText?: string,
    files: Array<File | string>,
    initiatorRenderer?: React.Element<'div'>;
    noFilesText?: string,
    onFileAdded: File => any,
    showCount?: boolean;
};

type State = {
    isListVisible: boolean,
};

type File = {
    URL: string,
    name: string,
};

class FileDropDown extends PureComponent <Props, State> {
    state : State = {
        isListVisible: false,
    };

    componentDidMount() {
        document.addEventListener('mousedown', this._handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this._handleOutsideClick);
    }
    
    _handleOutsideClick = (e : MouseEvent) : void => {
        if (this.state.isListVisible && e.target && !didClickInside(e.target)) {
            this._hideList();
        }
    }    

    _showList = () : void => {
        this.setState({isListVisible: true});
    }

    _hideList = () : void => {
        this.setState({isListVisible: false});
    }

    _handleAddFileClick = () : void => {
        const INPUT = document.getElementById('FileInput'); // since ref does not work
        if(!INPUT) return;
        INPUT.click();
    }

    _handleFileChange = (e : Event) : void => {
        this.props.onFileAdded(e.target.files[0]);
    }

    _renderList = (r : Props) : any => {
        return (
            <section className="List">
               {(!r.files || r.files.length === 0) && <p className="Empty">{r.noFilesText || 'No files'}</p>}
               {(r.files && r.files.length > 0) && r.files.map((f: File | string, k: number) => <a key={k} href={ typeof f === 'string' ? f : f.URL} target="_blank">{typeof f === 'string' ? f : f.name}</a>)}

               <button className="Adder" onClick={this._handleAddFileClick}>{r.addFileText || 'Add a file'}</button>
               <button className="Closer" onClick={this._hideList}>X</button>
               <input id="FileInput" type="file" hidden onChange={this._handleFileChange}/>
            </section>
        );
    }

    render() {
        const FILES : Array<File | string> = this.props.files;

        return (
            <div className="FileDropDown">
                <div className="Initiator" onClick={this._showList}>
                    {this.props.initiatorRenderer || 'Files'}
                    {(this.props.showCount && FILES && FILES.length > 0) && <span>{FILES.length}</span>}
                </div>

                {this.state.isListVisible && this._renderList(this.props)}
            </div>
        );
    }
}

const didClickInside = (target : EventTarget) => {
    return target.className === 'Initiator' || target.className === 'List' || (target.parentElement && target.parentElement.className === 'List');
}

export default FileDropDown;