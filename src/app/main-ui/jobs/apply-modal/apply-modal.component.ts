import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { JobsService } from 'src/app/_services/jobs.service';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ModalService } from 'src/app/interceptors/modal.service';
import { ApplyModalCompleateComponent } from '../apply-modal-compleate/apply-modal-compleate.component';

@Component({
  selector: 'apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.scss'],
})
export class ApplyModalComponent implements OnInit {
  // modal
  @Input() id!: string;
  private element: any;

  public success: boolean = false;
  // modal tab
  public tabActive = true;

  // wysiwyg editor for textarea
  public editor!: Editor;
  public toolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'ordered_list', 'bullet_list'],
  ];
  public apply_form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobsServ: JobsService,
    private el: ElementRef,
    public modalServ: ModalService
  ) {
    this.apply_form = this.fb.group({
      editorContent: new FormControl('', [Validators.required()]),
      portfolioLink: new FormControl(''),
      socMediaLink: new FormControl(''),
      links: this.fb.array([]),
    });
    this.element = this.el.nativeElement;
  }

  // form workers
  get text(): AbstractControl | null {
    return this.apply_form.get('editorContent');
  }
  get portfolio(): AbstractControl | null {
    return this.apply_form.get('portfolioLink');
  }
  get socMedia(): AbstractControl | null {
    return this.apply_form.get('socMediaLink');
  }
  links(): FormArray {
    return this.apply_form.get('links') as FormArray;
  }
  newLinks(): FormGroup {
    return this.fb.group({
      qty: '',
    });
  }
  addLinks() {
    this.links().push(this.newLinks());
  }
  removeLinks(i: number) {
    this.links().removeAt(i);
  }
  onSubmit() {
    console.log(this.apply_form.value);
  }
  openFile(){
    document.getElementById('uploadResume')!.click()
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  changeTab() {
    this.tabActive = !this.tabActive;
  }
  nextModal():void {
    this.onSubmit();

    this.modalServ.switchModal(ApplyModalCompleateComponent)
  }

  ngOnDestroy(): void {

    this.editor.destroy();
    this.jobsServ.remove(this.id);
    this.element.remove();
  }
}
