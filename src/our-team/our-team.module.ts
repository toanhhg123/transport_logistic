import { Module } from '@nestjs/common'
import { OurTeamController } from './our-team.controller'

@Module({
  controllers: [OurTeamController]
})
export class OurTeamModule {}
