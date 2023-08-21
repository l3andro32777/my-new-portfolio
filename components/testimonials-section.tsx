import { testimonials } from "@/lib/testimonials"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export default function Testimonials() {
  return (
    <div>
      <div className="mx-auto py-4 lg:mx-0">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-5xl times">
          Testimonials
        </h1>
        <p className="text-xs py-4 text-muted-foreground sm:text-base">
          Whispers that echo, through the Seven Kingdoms.
        </p>
      </div>
      <div className="md:column-layout">
        {testimonials
          .slice()
          .reverse()
          .map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between md:card-item"
            >
              <CardHeader className="flex flex-row items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <p>{testimonial.date}</p>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}
