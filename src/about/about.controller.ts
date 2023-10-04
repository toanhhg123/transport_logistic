import { Controller, Get, Render } from '@nestjs/common'

@Controller('gioi-thieu')
export class AboutController {
  @Get()
  @Render('about/index')
  public index() {
    return { message: 'hello' }
  }
}
