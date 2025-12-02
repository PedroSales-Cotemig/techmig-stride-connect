import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'scale' 
  | 'blur'
  | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const getAnimationClasses = (animation: AnimationType, isInView: boolean) => {
  const baseTransition = 'transition-all ease-out';
  
  const animations: Record<AnimationType, { hidden: string; visible: string }> = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    'fade-down': {
      hidden: 'opacity-0 -translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    'slide-left': {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0'
    },
    'slide-right': {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0'
    },
    'scale': {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    'blur': {
      hidden: 'opacity-0 blur-sm',
      visible: 'opacity-100 blur-0'
    },
    'none': {
      hidden: '',
      visible: ''
    }
  };

  const { hidden, visible } = animations[animation];
  return cn(baseTransition, isInView ? visible : hidden);
};

const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(animation, isInView), className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
