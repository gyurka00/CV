'use strict';

var app = angular.module('CV', []);

app.controller('summaryController', ['$scope', function($scope) {
  $scope.summary = [
    'Software developer intern (six months of experience in frontend development and five months of experience in C++ development)',
    'Knowledge of software development methodologies and approaches',
    'Great social skills, experience in an international student association (i.e. ‘BEST’)',
    'Experience in teamwork',
    'Good stamina, hardworking attitude, logical thinking and practical sense',
    'Written and spoken English'
  ];
}]);

app.controller('skillsController', ['$scope', function($scope) {
  $scope.skills = [
    {type: 'Technologies', description: 'JavaScript, HTML, CSS'},
    {type: 'JavaScript libraries', description: ' React, AngularJS, Node.js, Express'},
    {type: 'SourceControl', description: 'Git, SVN'},
    {type: 'Methodology', description: 'Scrum, TDD, BDD'},
    {type: 'Databases', description: 'MySQL, PostgreSQL, MongoDB'},
    {type: 'OS', description: 'Windows, Linux, OSX'},
    {type: 'IDE', description: 'Atom, Eclipse, Microsoft Visual Studio'},
  ];
}]);

app.controller('workExperienceController', ['$scope', function($scope) {
  $scope.workExperience = [
     {
      time: 'August 2018 – nowadays',
      title: 'Software Developer',
      company: 'Code and Soda',
      project: 'ecommerce site',
      project_role: 'front-end developer',
      tasks: [
        'created HTML, CSS and JS',
        'made test',
        'code review with the other members',
      ],
      technologies: 'Javascript, HTML, CSS',
      tools: '',
    },
    {
      time: 'May 2016 – July 2018',
      title: 'Front-end Developer',
      company: 'EU Edge',
      project: 'ecommerce site, stabel crypto tokens (Augmint)',
      project_role: 'front-end developer',
      tasks: [
        'created HTML, CSS and JS',
        'made test',
        'code review with the other members',
      ],
      technologies: 'Javascript, HTML, CSS',
      tools: 'AngularJS, React',
    },
    {
      time: 'February 2016 – March 2016',
      title: 'Software Developer',
      company: 'Green Fox Academy',
      project: 'interviewer helper application as part of a team of 4-7 members',
      project_role: 'full stack software developer',
      tasks: [
        'created server side',
        'made test for server side',
        'created database',
        'set up product environment',
      ],
      technologies: 'Javascript, HTML, CSS',
      tools: 'Heroku, NewRelic, Logentries, CodeShip, Gulp, Jasmine, Karma, Jshint, Sass, Node.js, AngularJS, superTest, Express',
    },
    {
      time: 'January 2015 – May 2015',
      title: 'Software Developer (intern)',
      company: 'Ericsson Magyarország Kft., Irinyi József utca 4-20. Budapest, Hungary',
      project: 'remote procedure call (confidential) as part of a team of 4 members',
      project_role: 'full stack software developer',
      tasks: [
        'worked with TCP sockets',
        'managed NPU1D nodes',
        'implemented RPC functions between 2 nodes',
      ],
      technologies: 'C++, TCP socket',
      tools: 'Eclips, superPuTTY',
    },
    {
      time: 'June 2014 – December 2014',
      title: 'Software Developer (intern)',
      company: 'Ericsson Magyarország Kft., Irinyi József utca 4-20. Budapest, Hungary',
      project: 'web application prototype (strictly confidential) as part of a team of 6-9 members',
      project_role: 'junior frontend developer',
      tasks: [
        'created new pages',
        'fixed old codes',
        'migrated database from mongoDB to postgreSQL',
      ],
      languages: 'HTML5, JavaScript, CSS3',
      technologies: 'NodeJs, Express, HTML5 Canvas',
      ide: 'Notepad++, mobaXterm',
      methodology: 'Scrum',
      databases: 'MongoDB, PostgreSQL'
    },

  ];
}]);

app.controller('educationController', ['$scope', function($scope) {
  $scope.education = [
    {
      time: 'October 2015-March 2016',
      school: 'Green Fox Academy',
      type: 'Software Developer'
    },
    {
      time: '2011-2015',
      school: 'Budapest University of Technology and Economics',
      type: 'Electrical Engineering (BSc)'
    },
    {
      time: '2006-2011',
      school: 'Tivadar Puskás Vocational School, Budapest',
      type: 'High-School graduation, Information Technologist (TAFE), Telecommunications Technologist (TAFE)'
    },

  ];
}]);
