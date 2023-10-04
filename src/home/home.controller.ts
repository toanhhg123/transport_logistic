import { Get, Controller, Render } from '@nestjs/common'

@Controller('/')
export class HomeController {
  @Get()
  @Render('index')
  public index() {
    return { message: 'hello' }
  }

  @Get('/404')
  @Render('index')
  public notFound() {
    return { message: 'hello' }
  }
}
