import { Controller, Get, Render } from '@nestjs/common'

@Controller('faqs')
export class FaqsController {
  @Get()
  @Render('faqs/index')
  public index() {
    return { message: 'hello' }
  }
}
