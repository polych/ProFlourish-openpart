import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AboutComponent } from './main-ui/about/about.component';
import { ArticleComponent } from './main-ui/article/article.component';
import { ContactsComponent } from './main-ui/contacts/contacts.component';
import { ClientSucCoachProgramComponent } from './main-ui/marketing-pages/client-suc-coach-program/client-suc-coach-program.component';
import { DoneForHiringComponent } from './main-ui/marketing-pages/done-for-hiring/done-for-hiring.component';
import { EdidComponent } from './main-ui/marketing-pages/edid/edid.component';
import { HomepageComponent } from './main-ui/marketing-pages/homepage/homepage.component';
import { LeadershipComponent } from './main-ui/marketing-pages/leadership/leadership.component';
import { MarketingPagesComponent } from './main-ui/marketing-pages/marketing-pages.component';
import { MarketingComponent } from './main-ui/marketing-pages/marketing/marketing.component';
import { OperationsComponent } from './main-ui/marketing-pages/operations/operations.component';
import { ResForEmpComponent } from './main-ui/marketing-pages/res-for-emp/res-for-emp.component';
import { ResForSeekComponent } from './main-ui/marketing-pages/res-for-seek/res-for-seek.component';
import { SalesComponent } from './main-ui/marketing-pages/sales/sales.component';
import { VirtAssAdminComponent } from './main-ui/marketing-pages/virt-ass-admin/virt-ass-admin.component';
import { SearchComponent } from './main-ui/jobs/search/search.component';
import { JobCardComponent } from './main-ui/jobs/job-card/job-card.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CreateResumeComponent } from './candidate/create-resume/create-resume.component';
import { CanDashboardComponent } from './candidate/can-dashboard/can-dashboard.component';
import { CliDashboardComponent } from './client/cli-dashboard/cli-dashboard.component';
import { PersonalInfoComponent } from './candidate/personal-info/personal-info.component';
import { ResumeComponent } from './candidate/resume/resume.component';
import { SavedJobsComponent } from './candidate/saved-jobs/saved-jobs.component';
import { SubscriptionsComponent } from './candidate/subscriptions/subscriptions.component';
import { ClientComponent } from './client/client.component';
import { CompanyComponent } from './client/company/company.component';
import { PrivacyComponent } from './main-ui/privacy/privacy.component';
import { AccountComponent } from './client/account/account.component';
import { JobPostsComponent } from './client/job-posts/job-posts.component';
import { CreateJobComponent } from './client/create-job/create-job.component';
import { JobPreviewComponent } from './client/job-preview/job-preview.component';
import { CandidatesComponent } from './client/candidates/candidates.component';
import { SelectPlanComponent } from './client/select-plan/select-plan.component';
import { PaymentComponent } from './client/payment/payment.component';
import { ThankYouComponent } from './client/payment/thank-you/thank-you.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },

  {
    path: 'dream-jobs',
    component: MarketingPagesComponent,
    children: [
      {
        path: 'administration',
        component: VirtAssAdminComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'client-success',
        component: ClientSucCoachProgramComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'marketing',
        component: MarketingComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'sales',
        component: SalesComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'elearning',
        component: EdidComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'leadership',
        component: LeadershipComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'operations',
        component: OperationsComponent,
        outlet: 'marketingPages',
      },
    ],
  },
  {
    path: 'dream-team',
    component: MarketingPagesComponent,
    children: [
      {
        path: 'done-for-hiring',
        component: DoneForHiringComponent,
        outlet: 'marketingPages',
      },
    ],
  },
  {
    path: 'resources',
    component: MarketingPagesComponent,
    children: [
      {
        path: 'for-seekers',
        component: ResForSeekComponent,
        outlet: 'marketingPages',
      },
      {
        path: 'for-employers',
        component: ResForEmpComponent,
        outlet: 'marketingPages',
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'job/:id', component: JobCardComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'privacy', component: PrivacyComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        outlet: 'auth',
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        outlet: 'auth',
      },
      {
        path: 'forgot-password',
        component: ForgotPassComponent,
        outlet: 'auth',
      },
    ],
  },
  {
    path: 'candidate',
    component: CandidateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Candidate] },
    children: [
      {
        path: 'dashboard',
        component: CanDashboardComponent,
        outlet: 'candidate',
      },
      {
        path: 'account',
        component: PersonalInfoComponent,
        outlet: 'candidate',
      },
      {
        path: 'resume',
        component: ResumeComponent,
        outlet: 'candidate',
      },
      {
        path: 'create-resume',
        component: CreateResumeComponent,
        outlet: 'candidate',
      },
      {
        path: 'saved',
        component: SavedJobsComponent,
        outlet: 'candidate',
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent,
        outlet: 'candidate',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      // { path: '**', component: Page404leavesComponent }
    ],

  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Client] },
    children: [
      {
        path: 'dashboard',
        component: CliDashboardComponent,
        outlet: 'client',
      },
      {
        path: 'company',
        component: CompanyComponent,
        outlet: 'client',
      },
      {
        path: 'account',
        component: AccountComponent,
        outlet: 'client',
      },
      {
        path: 'job-posts',
        component: JobPostsComponent,
        outlet: 'client',
      },
      {
        path: 'job-preview/:id',
        component: JobPreviewComponent,
        outlet: 'client',
      },
      {
        path: 'create-job',
        component: CreateJobComponent,
        outlet: 'client',
      },
      {
        path: 'candidates',
        component: CandidatesComponent,
        outlet: 'client',
      },
      {
        path: 'select-plan',
        component: SelectPlanComponent,
        outlet: 'client',
      },
      {
        path: 'paymant',
        component: PaymentComponent,
        outlet: 'client',
      },
    ],

  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
