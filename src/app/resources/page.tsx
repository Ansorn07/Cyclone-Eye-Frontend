
import { resourcesData } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, HelpCircle } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <main>
            <div className="bg-muted border-b text-green-700">
                <div className="container mx-auto px-4 py-16 text-center ">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline"> 🍃Your Guide to Safety</h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto text-green-700">
                        Knowledge is our strongest shelter. Here are checklists, contacts, and answers to help you stay prepared.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-8">
                      <Card>
                          <CardHeader>
                              <CardTitle>Safety Checklists</CardTitle>
                              <CardDescription>Simple steps to take before, during, and after a cyclone. Your safety is in your hands.</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <Accordion type="single" collapsible defaultValue="before">
                                  {resourcesData.checklists.map(checklist => (
                                      <AccordionItem key={checklist.id} value={checklist.id}>
                                          <AccordionTrigger className="text-lg">{checklist.title}</AccordionTrigger>
                                          <AccordionContent>
                                              <ul className="space-y-3 pl-2">
                                                  {checklist.items.map((item, index) => (
                                                      <li key={index} className="flex items-start">
                                                          <CheckCircle2 className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                                                          <span>{item}</span>
                                                      </li>
                                                  ))}
                                              </ul>
                                          </AccordionContent>
                                      </AccordionItem>
                                  ))}
                              </Accordion>
                          </CardContent>
                      </Card>
                      <Card>
                          <CardHeader>
                              <CardTitle>Frequently Asked Questions</CardTitle>
                              <CardDescription>Answers to common questions about cyclones and safety.</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <Accordion type="single" collapsible className="w-full">
                                  {resourcesData.faqs.map((faq, index) => (
                                      <AccordionItem key={index} value={`item-${index}`}>
                                          <AccordionTrigger>
                                              <div className="flex items-center gap-3">
                                                  <HelpCircle className="h-5 w-5 text-primary" />
                                                  {faq.question}
                                              </div>
                                          </AccordionTrigger>
                                          <AccordionContent className="text-muted-foreground">
                                              {faq.answer}
                                          </AccordionContent>
                                      </AccordionItem>
                                  ))}
                              </Accordion>
                          </CardContent>
                      </Card>
                  </div>
                  <Card>
                      <CardHeader>
                          <CardTitle>Emergency Contacts</CardTitle>
                          <CardDescription>Help is just a call away. Keep these numbers handy for emergencies.</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <Table>
                              <TableHeader>
                                  <TableRow>
                                      <TableHead>State/UT</TableHead>
                                      <TableHead>Helpline Number</TableHead>
                                  </TableRow>
                              </TableHeader>
                              <TableBody>
                                  {resourcesData.emergencyContacts.map(contact => (
                                      <TableRow key={contact.state}>
                                          <TableCell className="font-medium">{contact.state}</TableCell>
                                          <TableCell className="font-code">{contact.number}</TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </CardContent>
                  </Card>
              </div>
            </div>
        </main>
    );
}
