import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      description: 'Full demo website for a fake gym, with a built in functionality to build a custom workout routine. In order to build a custom routine, the user has the option to choose from thousands of exercises, that are fetched and searched for in a searchbar that has search filter functionality.',
      previewImg: './assets/projectPreviews/zeusGymPrev.png',
      technologies: 'Angular, Typescript, Sass',
      siteLink: 'https://valentinovalle.github.io/ZeusGymWebsite/',
      repoLink: 'https://github.com/ValentinoValle/ZeusGymWebsite',
    },
    {
      name: 'AppChat',
      description: 'Simple chatting application. In this site you can register an account and chat with anyone that is also registered.',
      previewImg: './assets/projectPreviews/appChatPrev.png',
      technologies: 'React, Typescript, Sass, Firebase',
      siteLink: 'https://main--warm-pavlova-5f13d6.netlify.app/login',
      repoLink: 'https://github.com/ValentinoValle/AppChatWebsite'
    },
    {
      name: 'Web Crawler',
      description: 'This program allows you to see all the inner links of a website, printing them in the console.',
      previewImg: './assets/projectPreviews/WebCrawlerPrev.png',
      technologies: 'Javascript, Jest',
      repoLink: 'https://github.com/ValentinoValle/WebCrawler'
    },
  ]

  constructor(private route: ActivatedRoute) {  }

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
