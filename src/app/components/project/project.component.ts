import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Project } from 'src/app/interfaces/iproject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: Project;

  projectsArr: Project[] = [
    {
      name: 'Zeus Gym',
      enDesc: 'Full demo website for a fake gym, with a built in functionality to build a custom workout routine. In order to build a custom routine, the user has the option to choose from thousands of exercises, that are fetched and searched for in a searchbar that has search filter functionality.',
      esDesc: 'Sitio demo completo para un gimnasio falso, con una funcionalidad que permite al usuario construir una rutina propia. Para esto, el usuario tiene la opción de elegir entre miles de ejercicios, que puede buscar con una barra de búsqueda.',
      previewImg: './assets/projectPreviews/zeusGymPrev.png',
      technologies: 'Angular, Typescript, Sass',
      siteLink: 'https://valentinovalle.github.io/ZeusGymWebsite/',
      repoLink: 'https://github.com/ValentinoValle/ZeusGymWebsite',
    },
    {
      name: 'AppChat',
      enDesc: 'Simple chatting application. In this site you can register an account and chat with anyone that is also registered.',
      esDesc: 'Aplicación  simple para chatear. En este sitio, el usuario podrá registrar una cuenta y chatear con cualquier otro usuario que esté registrado.',
      previewImg: './assets/projectPreviews/appChatPrev.png',
      technologies: 'React, Typescript, Sass, Firebase',
      siteLink: 'https://main--warm-pavlova-5f13d6.netlify.app/login',
      repoLink: 'https://github.com/ValentinoValle/AppChatWebsite'
    },
    {
      name: 'Web Crawler',
      enDesc: 'This program allows you to see all the inner links of a website, printing them in the console.',
      esDesc: 'Este programa te permite ver todos los links internos de un sitio web, imprimiendolos en la consola.',
      previewImg: './assets/projectPreviews/WebCrawlerPrev.png',
      technologies: 'Javascript, Jest',
      repoLink: 'https://github.com/ValentinoValle/WebCrawler'
    },
  ]

  constructor(private route: ActivatedRoute, public translate: TranslocoService) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      switch (params['routine']) {
        case 'zeusgym':
          this.project = this.projectsArr[0];
          break;
        case 'appchat':
          this.project = this.projectsArr[1];
          break;
        case 'webcrawler':
          this.project = this.projectsArr[2];
          break;
      }
    });
  }
}
