import './App.css';
import FullName from './Profile/Component/ProfileComponent';

function App() {
  const handleName = (nom) =>{
      alert (`Hi, I'm ${nom}`)
  }
  return (
      <div>
      <FullName
          title ='Mona'
          //Profession = 'Textile Engineer'
          Bio = 'My name is Mona i am 28 years old and Iam a textile engineer and a PHD student. I live in Moastir and meanwhile I am doing a training in Web Development in Sousse'
         handleName={handleName}
          color1='pink'
          color2='Blue'
          size='60px'

          >
              
        {'https://static.posters.cz/image/1300/affiches-et-posters/pokemon-pikachu-neon-i71936.jpg'}
                  
              
     </FullName>
      </div>
  )
}

export default App;


