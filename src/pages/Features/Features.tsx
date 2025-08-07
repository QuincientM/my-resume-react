const languagesUsed: string[] = ['TypeScript', 'JavaScript', 'HTML', 'CSS','JSON','React.js'];

export default function Feature() {
  return (
    <div>
      <h1>Languages Used</h1>
      <ul>
        {languagesUsed.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <a href="myfirstwebpage/index.html" >Click here</a>
    </div>
  );
}