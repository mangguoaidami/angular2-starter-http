import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'email-app',
    templateUrl: './app/pages/users/user-single/component/email.component.html'
})

export class EmailComponent  implements OnInit {
    @Input() private avatarMsg: string;
    @Output() private outer = new EventEmitter<string>();
    private inputText: string;

    constructor(){}

    commit(){
        this.outer.emit(this.inputText)
    }

    ngOnInit(){}
}