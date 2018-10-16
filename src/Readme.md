Example of basic functionality

```
initialState = {
    files: []
}

handleAddFile = f => {
    let files = state.files;
    files.push({name: f.name, URL: '/some/url'});
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
    files.push({name: f.name, URL: '/some/url'});
    setState({files});
}

const CR = <div className="CustomRenderer" style={{backgroundColor: 'cadetblue', display: 'inline-block', padding: '10px 20px', color: '#fff'}}>Car Attachments</div>;

<FileDropDown initiatorRenderer={CR} files={state.files} onFileAdded={handleAddFile} showCount={false}/>
```