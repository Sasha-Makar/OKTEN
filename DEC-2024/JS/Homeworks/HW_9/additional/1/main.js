// 1
// Цикл в циклі
// - Є масив coursesArray котрий лежить в
// arrays.js (на цей момент ви вже знаєте
// де він знаходиться)
// Створити для кожного елементу масиву свій
// блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей,
//для властивості modules зробити список з
// елементами
// Приклад структири знаходиться у файлі
// example.png який лежить в папці з поточним
// фйлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {

    let courseDiv = document.createElement('div');

    let titleDiv = document.createElement('div');
    titleDiv.innerText = course.title;

    let monthDiv = document.createElement('div');
    monthDiv.innerText = `Duration: ${course.monthDuration} months`;

    let hourDiv = document.createElement('div');
    hourDiv.innerText = `Duration: ${course.hourDuration} hours`;

    let modulesDiv = document.createElement('div');
    let modulesList = document.createElement('ul');
    for (const module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.innerText = module;
        modulesList.appendChild(moduleItem);
    }

    modulesDiv.appendChild(modulesList);
    courseDiv.append(titleDiv,monthDiv,hourDiv,modulesDiv);
    
    document.body.appendChild(courseDiv);
}


