import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  buttonText?: string;
}

export function SuccessDialog({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  buttonText = 'Close' 
}: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center items-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-heading">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base mt-4 text-center text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button 
            onClick={() => onOpenChange(false)}
            variant="hero"
            className="w-full"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
