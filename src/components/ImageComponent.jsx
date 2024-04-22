import React from "react";
class ImageComponent extends React.Component{
render(){
    return <img src={this.props.src} alt={this.props.alt} style={this.props.style} />
}
}

export default ImageComponent;