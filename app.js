const express = require('express');
const app = express();
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  

  function filterUserSpeciality(specialty) {
    return usersData.filter(user => user.specialty === specialty);
}

app.get('/', (req, res)=>{
    
    const html= `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Specialities</title>
    </head>
    <body>
        <div>
        <h1>Welcome to the specialties page!</h1>
        <h3>Home page</h3>
        <nav><a href="/marketing">Marketing</a>
             <a href="/developer">Developer</a>
             <a href="/QAs">QAs</a>
             <a href="/ventas">Ventas</a>  
             <a href="/signin">Sign in</a> 
        </nav></div>  
        <h3>Our speciality workers</h3>  
        <ul> ${usersData.map(user=> `<li>${user.name}</li>`).join('')}
        </ul> 
       
    </body>
    </html>`;
    res.send(html);
    
});
app.get('/marketing', (req, res) => {
    const marketingUsers = filterUserSpeciality('marketing');
    const htmlMarketing = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>marketing</title>
    </head>
    <body>
        <div>
            <h1>Welcome to marketing!</h1>
        </div>
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/developer">Developer</a>
                <a href="/QAs">QAs</a>
                <a href="/ventas">Ventas</a>
                <a href="/signin">Sign in</a>
            </nav>
        </div>
        <div>
            <p>Number of people in marketing: ${marketingUsers.length}</p>
            <ul>
                ${marketingUsers.map(user => `<li>${user.name}, ${user.age} years old</li>`).join('')}
            </ul>
        </div>
    </body>
    </html>`;
    res.send(htmlMarketing);
});

app.get('/developer', (req, res)=>{
    const developerUsers=filterUserSpeciality('developers')
    const htmlDeveloper =`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>developer</title>
    </head>
    <body>
        <div>
        <h1>Welcome to developer!</h1></div>
     
        <div><nav><a href="/">Home</a>
                <a href="/marketing">Marketing</a>
                <a href="/QAs">QAs</a>
                <a href="/ventas">Ventas</a>  
                <a href="/signin">Sign in</a> 
            </nav></div>   
        <div><p>Number of people in developer</p>
            <ul>${developerUsers.map(user=>`<li>${user.name}, ${user.age} years old</li>`).join('')}
            </ul>
        </div>      
    </body>
    </html>`;
    res.send(htmlDeveloper);
});
app.get('/QAs', (req, res)=>{
    const qAsUsers= filterUserSpeciality('QAs')
    const htmlQAs = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAs</title>
    </head>
    <body>
        <div>
        <h1>Welcome to QAs!</h1></div>
        
        <div><nav><a href="/">Home</a>
                <a href="/marketing">Marketing</a>
                <a href="/developer">Developer</a>
                <a href="/ventas">Ventas</a>  
                 <a href="/signin">Sign in</a> 
         </nav></div>   
         <div><p>Number of people in QAs</p>
         <ul>${qAsUsers.map(user=>`<li>${user.name}, ${user.age} years old</li>`).join('')}
         </ul>
         </div>  
    </body>
    </html>`;
    res.send(htmlQAs);
});
app.get('/ventas', (req, res)=>{
    const ventasUsers= filterUserSpeciality('ventas')
    const htmlVentas=`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ventas</title>
    </head>
    <body>
        <div>
        <h1>Welcome to ventas</h1></div>
     
        <div><nav><a href="/">Home</a>
                <a href="/marketing">Marketing</a>
                <a href="/developer">Developer</a>
                <a href="/QAs">QAs</a>               
                <a href="/signin">Sign in</a> 
            </nav></div>   
        <div><p>Number of people in Ventas</p>
        <ul>${ventasUsers.map(user=> `<li>${user.name}, ${user.age} years old</il>`).join('')}
        </ul>
        </div>      
    </body>
    </html>`;
    res.send(htmlVentas);
});

app.use((req,res)=>{
    res.status(404).send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ventas</title>
    </head>
    <body>
        <div>
        <h1>Error 404: Página no encontrada</h1></div>
     
        <div><nav><a href="/">Home</a>
                <a href="/marketing">Marketing</a>
                <a href="/developer">Developer</a>
                <a href="/QAs">QAs</a>               
                <a href="/signin">Sign in</a> 
            </nav></div>     
    </body>
    </html>`);
    
});



app.listen(3000, ()=>{
    console.log('el servidor esta escuchando en el puerto 3000');
});