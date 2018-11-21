Example of basic functionality

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push({name: '/some/url' , type : f.type });
    setState({files});
}

<FileDropDown files={state.files} onFileAdded={handleAddFile} showCount={true}/>
```

Example of basic functionality with file icon

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push({name: '/some/url' , type : f.type });
    setState({files});
}

<FileDropDown files={state.files} onFileAdded={handleAddFile} showCount={true} showIcon={true}/>
```
Example with array of strings

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push('/some/url');
    setState({files});
}

<FileDropDown files={state.files} onFileAdded={handleAddFile} showCount={true}/>
```
Example with array of strings

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push('/some/url');
    setState({files});
}

<FileDropDown files={state.files} onFileAdded={handleAddFile} showCount={true}/>
```

Custom renderer without count

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push({name: '/some/url', type : f.type});
    setState({files});
}

const CR = <div className="CustomRenderer" style={{backgroundColor: 'cadetblue', display: 'inline-block', padding: '10px 20px', color: '#fff'}}>Car Attachments</div>;

<FileDropDown initiatorRenderer={CR} files={state.files} onFileAdded={handleAddFile} showCount={false}/>
```