import { Controller, Get, Render } from '@nestjs/common'

@Controller('our-team')
export class OurTeamController {
  @Get()
  @Render('ourTeam/index')
  public index() {
    return { message: 'hello' }
  }
}
