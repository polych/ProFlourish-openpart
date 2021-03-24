import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageDummy } from './home-page';
import { VsaDummy } from './vsa-page';
import { CscpdDummy } from './cscpd-page';
import { MsmDummy } from './msm-page';
import { SalesDummy } from './sales-page';
import { EdidDummy } from './edid';
import { LeadershipDummy } from './leadership';
import { OperationsDummy } from './operations';
import { DfhDummy } from './dfh-page';
import { RfsDummy } from './rfs-page';
import { RfeDummy } from './rfe-page';
import { ArticleDummy } from './article-page';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    HomePageDummy,
    VsaDummy,
    CscpdDummy,
    MsmDummy,
    SalesDummy,
    EdidDummy,
    LeadershipDummy,
    OperationsDummy,
    DfhDummy,
    RfsDummy,
    RfeDummy,
    ArticleDummy
  ],
})
export class DummyModule {}
