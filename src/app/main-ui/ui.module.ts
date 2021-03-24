import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyModule } from 'src/app/dummy-data/dummy.module';
import { ApplyComponent } from './ui-elements/apply/apply.component';
import { ArrowBannerComponent } from './ui-elements/arrow-banner/arrow-banner.component';
import { BrowseJobsComponent } from './ui-elements/browse-jobs/browse-jobs.component';
import { BussListComponent } from './ui-elements/buss-list/buss-list.component';
import { CarouselComponent } from './ui-elements/carousel/carousel.component';
import { InterestedComponent } from './ui-elements/interested/interested.component';
import { MultistepInfoComponent } from './ui-elements/multistep-info/multistep-info.component';
import { ResourcesComponent } from './ui-elements/resources/resources.component';
import { SkillSetComponent } from './ui-elements/skill-set/skill-set.component';
import { TableComponent } from './ui-elements/table/table.component';
import { WelcomeBannerComponent } from './ui-elements/welcome-banner/welcome-banner.component';
import { ClientSucCoachProgramComponent } from './marketing-pages/client-suc-coach-program/client-suc-coach-program.component';
import { DoneForHiringComponent } from './marketing-pages/done-for-hiring/done-for-hiring.component';
import { EdidComponent } from './marketing-pages/edid/edid.component';
import { HomepageComponent } from './marketing-pages/homepage/homepage.component';
import { LeadershipComponent } from './marketing-pages/leadership/leadership.component';
import { MarketingComponent } from './marketing-pages/marketing/marketing.component';
import { OperationsComponent } from './marketing-pages/operations/operations.component';
import { ResForEmpComponent } from './marketing-pages/res-for-emp/res-for-emp.component';
import { ResForSeekComponent } from './marketing-pages/res-for-seek/res-for-seek.component';
import { SalesComponent } from './marketing-pages/sales/sales.component';
import { VirtAssAdminComponent } from './marketing-pages/virt-ass-admin/virt-ass-admin.component';
import { MarketingPagesComponent } from './marketing-pages/marketing-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SearchComponent } from './jobs/search/search.component';
import { HttpErrorHandler } from '../_helpers/http-error-handler.service';
import { JobCardComponent } from './jobs/job-card/job-card.component';
import { NgxEditorModule } from 'ngx-editor';
import { ApplyModalComponent } from './jobs/apply-modal/apply-modal.component';
import { ApplyModalCompleateComponent } from './jobs/apply-modal-compleate/apply-modal-compleate.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    // pages
    HomepageComponent,
    VirtAssAdminComponent,
    ClientSucCoachProgramComponent,
    MarketingComponent,
    SalesComponent,
    EdidComponent,
    LeadershipComponent,
    OperationsComponent,
    DoneForHiringComponent,
    ResForSeekComponent,
    ResForEmpComponent,
    AboutComponent,
    ContactsComponent,
    ArticleComponent,
    SearchComponent,
    JobCardComponent,

    // elements
    WelcomeBannerComponent,
    BrowseJobsComponent,
    ArrowBannerComponent,
    MultistepInfoComponent,
    SkillSetComponent,
    BussListComponent,
    ApplyComponent,
    TableComponent,
    ResourcesComponent,
    InterestedComponent,
    CarouselComponent,
    MarketingPagesComponent,
    ApplyModalComponent,
    ApplyModalCompleateComponent,
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    DummyModule,
    SharedModule,
    AppRoutingModule,
    NgxEditorModule,
  ],
  exports: [MarketingPagesComponent],
  providers: [HttpErrorHandler],
})
export class UiModule {}
