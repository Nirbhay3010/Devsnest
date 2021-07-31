const Template = ({ templates, setmeme }) => {
    return (
      <div className="templates">
        {templates.map((template) => (
          <div key={template.id} className="template">
            <div
              style={{ backgroundImage: `url(${template.url})` }}
              className="image"
              onClick={() => setmeme(template)}
            ></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Template;