import React from "react";

class UploadPreview extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.resetFile = this.resetFile.bind(this);
    }
    onChange(event) {
        this.props.getFileFromUploadedImage(
            URL.createObjectURL(event.target.files[0])
        );
    }

    resetFile(event) {
        event.preventDefault();
        this.setState({ file: null });
    }
    render() {
        return (
            <div>
                <label>
                    {" "}
                    Enter Your File
                    <input type="file" onChange={this.onChange} />
                </label>
            </div>
        );
    }
}

export default UploadPreview;