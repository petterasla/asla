const HtmlComponent = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/stitch-ui.html"
                title="Stitch Google Generated Site"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default HtmlComponent;