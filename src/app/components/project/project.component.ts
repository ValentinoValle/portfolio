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
      technologies: 'Angular, Typescript, Sass'
    }
  ]

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      switch (params['routine']) {
        case 'zeusgym':
          this.project = this.projectsArr[0];
          break;
        default:
          this.project = this.projectsArr[0];
          break;
      }
    });
  }
}
