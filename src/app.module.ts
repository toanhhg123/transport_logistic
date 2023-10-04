import { Module } from '@nestjs/common'
import { HomeModule } from './home/home.module'
import { APP_FILTER } from '@nestjs/core'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import { AboutModule } from './about/about.module'
import { ServiceModule } from './service/service.module'
import { BlogModule } from './blog/blog.module'
import { PriceTableModule } from './price-table/price-table.module'
import { FaqsController } from './faqs/faqs.controller'
import { FaqsModule } from './faqs/faqs.module'
import { OurTeamModule } from './our-team/our-team.module'
import { ContactModule } from './contact/contact.module'

@Module({
  imports: [
    HomeModule,
    AboutModule,
    ServiceModule,
    BlogModule,
    PriceTableModule,
    FaqsModule,
    OurTeamModule,
    ContactModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
  controllers: [FaqsController]
})
export class AppModule {}
