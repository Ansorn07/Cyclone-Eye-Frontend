import { AlertTriangle, OctagonAlert, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Alert = {
    id: string;
    region: string;
    severity: 'red' | 'orange' | 'yellow';
    title: string;
    description: string;
    issued: string;
}

const severityConfig = {
    red: {
        icon: <OctagonAlert className="h-6 w-6 text-severity-red" />,
        borderColor: 'border-severity-red',
        titleColor: 'text-severity-red',
    },
    orange: {
        icon: <AlertTriangle className="h-6 w-6 text-severity-orange" />,
        borderColor: 'border-severity-orange',
        titleColor: 'text-severity-orange',
    },
    yellow: {
        icon: <AlertCircle className="h-6 w-6 text-severity-yellow" />,
        borderColor: 'border-severity-yellow',
        titleColor: 'text-severity-yellow',
    }
}

export default function AlertCard({ alert }: { alert: Alert }) {
    const config = severityConfig[alert.severity];

    return (
        <Card className={cn('border-l-4', config.borderColor)}>
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div>
                  {config.icon}
                </div>
                <div className="flex-1">
                    <CardTitle className={cn('text-lg font-headline', config.titleColor)}>{alert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{alert.region} - Issued {alert.issued}</p>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/90">{alert.description}</p>
            </CardContent>
        </Card>
    )
}
