import { Controller, Get, Render } from '@nestjs/common'

@Controller('contact')
export class ContactController {
  @Get()
  @Render('contact/index')
  public index() {
    return { message: 'hello' }
  }
}
