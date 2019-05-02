
//this function generates background style object for inline-styles
export  const getBackgroundStyle =(imgSrc,selected)=>{
    let bgImgString 
    let isScale;
    let borderStyle;
    let zIndexStyle;
    if(selected){
        isScale= "scale(1.1)";
        bgImgString = `url( ${imgSrc})`
        borderStyle= '3px solid silver';
        zIndexStyle="2";
    }
        
    else{
        bgImgString=`linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgSrc})`;
        borderStyle="none";
        zIndexStyle="1";
    }
        

    const styleObj={
        backgroundImage:bgImgString,
        backgroundPosition:'center',
        backgroundSize:'cover',
        transform:isScale,
        border:borderStyle,
        zIndex:zIndexStyle
    }
    return styleObj;
}

