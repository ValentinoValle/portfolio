import { animate, query, style, transition, trigger } from "@angular/animations";

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({ 
                    display: 'grid', 
                    gridTemplateRows: '0fr'
                }),
            ], { optional: true }),
            query(':leave', [
                style({ 
                    display: 'grid', 
                    gridTemplateRows: '1fr'
                }),
                animate('0.2s ease-in-out', style({ gridTemplateRows: '0fr' }))
            ], { optional: true }),
            
            query(':enter', [
                style({ 
                    display: 'grid', 
                    gridTemplateRows: '0fr'
                }),
                animate('0.2s ease-in-out', style({ gridTemplateRows: '1fr' }))
            ], { optional: true }),

        ])
    ]);
