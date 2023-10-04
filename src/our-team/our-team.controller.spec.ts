import { Test, TestingModule } from '@nestjs/testing'
import { OurTeamController } from './our-team.controller'

describe('OurTeamController', () => {
  let controller: OurTeamController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurTeamController]
    }).compile()

    controller = module.get<OurTeamController>(OurTeamController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
